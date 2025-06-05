export default function ScrollToBottom() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
    });
}