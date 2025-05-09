// Navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');

    

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    // Modal logic
    const calcBtn = document.querySelector('.signup-btn[href="#fin_calc"]');
    const modal = document.getElementById('fin_calc');
    if (calcBtn && modal) {
        const closeBtn = modal.querySelector('.fechar');
        // Show modal on button click
        calcBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('active');
        });
        // Hide modal on close button click
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.remove('active');
        });
        // Hide modal when clicking outside the form
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});
calculate = function(){

    var renda = document.getElementById('renda').value;
    
 var desp1 = document.getElementById('agua').value;
 
 var desp2 = document.getElementById('luz').value;
 
 var desp3 = document.getElementById('aluguel').value;
 
 var desp4 = document.getElementById('financiamento').value;
 
 var desp5 = document.getElementById('internet').value;
 
 var desp6 = document.getElementById('celular').value;
 
 var desp7 = document.getElementById('alimentacao').value;
 
 var desp8 = document.getElementById('transporte').value;
 
 var desp9 = document.getElementById('cartao').value;
 
 var desp10 = document.getElementById('lazer').value;
 
 var desp11 = document.getElementById('saude').value;
 
 var desp12 = document.getElementById('outros').value;
      
 
      var total = parseFloat(renda) - (parseFloat(desp1) + parseFloat(desp2) + parseFloat(desp3) + parseFloat(desp4) +
      parseFloat(desp5) + parseFloat(desp6) + parseFloat(desp7) + parseFloat(desp8) + parseFloat(desp9) + parseFloat(desp10) + parseFloat(desp11) + parseFloat(desp12));
 
    
      document.getElementById('total').value = total
 }

