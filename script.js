// Tính năng cuộn ngang bằng con lăn chuột cho mục Timeline bài tập
const steppedScroll = document.querySelector(".stepped-scroll-wrapper");

if (steppedScroll) {
    steppedScroll.addEventListener("wheel", (evt) => {
        const isAtEnd = steppedScroll.scrollLeft + steppedScroll.clientWidth >= steppedScroll.scrollWidth - 1;
        const isAtStart = steppedScroll.scrollLeft === 0;

        if ((evt.deltaY > 0 && !isAtEnd) || (evt.deltaY < 0 && !isAtStart)) {
            evt.preventDefault();
            steppedScroll.scrollTo({
                left: steppedScroll.scrollLeft + evt.deltaY * 1.5,
                behavior: "auto"
            });
        }
    }, { passive: false });
}