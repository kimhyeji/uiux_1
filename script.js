// gsap
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// selector
const panels = gsap.utils.toArray("#fullpage .section");

// snap to section
function goToSection(panel, index) {
    gsap.to(window, {
      scrollTo: { y: panel, autoKill: false },
      duration: 1,
      ease: "power2.out",
    });
}
// snap on scroll
function snapIn(index) {
  const tlSnapIn = gsap.timeline();
    panels.forEach((panel, i) => {
      tlSnapIn.to(panel, {
        duration: 1,
        scrollTrigger: {
          trigger: panel,
          onEnter: () => goToSection(panel),
          onEnterBack: () => goToSection(panel)
        }
      })
    });
  return tlSnapIn;
}
// main timeline
function initPanelTl(index) {
  const tl = gsap.timeline();
  const snap = snapIn(index);
  tl.add(snap);
  return tl;
}
// run timeline
initPanelTl();