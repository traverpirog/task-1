var tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]')
tooltipElements && tooltipElements.forEach(element => {
    var tooltip = new bootstrap.Tooltip(element)
})