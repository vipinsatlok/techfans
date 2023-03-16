export function countText(text, filterText, caseSensitive = true) {
    let count = 0;
    if (filterText) {
        const regex = new RegExp(caseSensitive ? filterText : filterText.toLowerCase(), 'g');
        count = (text.match(regex) || []).length;
    } else {
        count = caseSensitive ? text.length : text.toLowerCase().length;
    }
    return count;
}
