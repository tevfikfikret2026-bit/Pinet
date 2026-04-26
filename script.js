function showTab(tabId) {
    // Tüm içerikleri gizle
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Tüm butonların aktifliğini kaldır
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Seçilen içeriği göster ve butonu işaretle
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}
