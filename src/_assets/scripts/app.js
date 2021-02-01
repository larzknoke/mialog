import { gsap, Sine } from "gsap";

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
	window.onload = function () {
		if (document.getElementById("starter")) {
			gsap.from("#Teams", {
				duration: 1.5,
				rotation: -10,
				opacity: 0,
				x: 20,
				onComplete: addTransition,
			});
			gsap.from("#Organisation", {
				duration: 1.5,
				rotation: -12,
				opacity: 0,
				y: 50,
				onComplete: addTransition,
			});
			gsap.from("#Individuum", {
				duration: 2,
				rotation: 16,
				opacity: 0,
				x: -50,
				onComplete: addTransition,
			});
			gsap.from("#Rand", { duration: 3, opacity: 0, scale: 0.95, x: 5 });
		}
		if (document.getElementById("animation")) {
			console.log("indi");
			var stackerTop = document.getElementsByClassName("stacker-top");
			var boxes = document.getElementsByClassName("stacker");
			var boxes2 = document.getElementsByClassName("stacker2");

			var tl = gsap.timeline();
			tl.fromTo(
				".box-header",
				{
					opacity: 0,
					x: "100px",
				},
				{
					opacity: 1,
					x: 0,
					ease: Sine.easeInOut,
					duration: 0.5,
				}
			);
			tl.staggerFromTo(
				stackerTop,
				0.35,
				{
					x: "-100px",
					ease: Sine.easeOut,
					opacity: 0,
				},
				{
					opacity: 1,
					x: 0,
				},
				0.2
			);
			tl.fromTo(
				".trapezoid",
				{
					opacity: 0,
					scaleX: 0,
				},
				{
					duration: 0.75,
					opacity: 1,
					scaleX: 1,
					transformOrigin: "0% 50%",
					ease: Sine.easeInOut,
				},
				"-=0.75"
			);

			tl.fromTo(
				".lastbox",
				{
					opacity: 0,
					scaleX: 0,
				},
				{
					opacity: 1,
					scaleX: 1,
					duration: 0.75,
					// delay: 0.5,
					transformOrigin: "0% 50%",
					ease: Sine.easeInOut,
				},
				"-=.5"
			);
			tl.staggerFromTo(
				boxes,
				0.35,
				{
					x: "20px",
					ease: Sine.easeOut,
					opacity: 0,
				},
				{
					opacity: 1,
					x: 0,
				},
				0.2,
				"-=0.75"
			);
			tl.fromTo(
				".slideContent",
				{ x: -20, opacity: 0, duration: 0.5 },
				{ opacity: 1, x: 0 },
				"-=0.25"
			);
			tl.fromTo(
				".lastbox-content",
				{ x: -20, opacity: 0, duration: 0.5 },
				{ opacity: 1, x: 0 },
				"-=0.25"
			);
		}
		tl.staggerFromTo(
			boxes2,
			0.35,
			{
				x: "20px",
				ease: Sine.easeOut,
				opacity: 0,
			},
			{
				opacity: 1,
				x: 0,
			},
			0.2,
			"-=0.35"
		);
	};

	var addTransition = function () {
		this.targets()[0].classList.add("anim-completed");
	};
});
