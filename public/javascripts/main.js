$('#navRegisterBtn').magnificPopup({
    type: 'inline',
    closeBtnInside: true,
    callbacks: {
        beforeOpen: function () {
            this.st.mainClass = 'mfp-zoom-in';
        }
    },
});