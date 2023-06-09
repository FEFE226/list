document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obter os valores dos campos de entrada
    var schoolName = document.getElementById('schoolName').value;
    var roomName = document.getElementById('roomName').value;
    var grade = document.getElementById('grade').value;
    var studentName = document.getElementById('studentName').value;
    var paymentDate = document.getElementById('paymentDate').value;
  
    // Criar um novo item de pagamento
    var paymentItem = document.createElement('li');
    paymentItem.innerHTML = `<i class="fas fa-user"></i> Aluno: ${studentName}<br>
                             <i class="fas fa-school"></i> Escola: ${schoolName}<br>
                             <i class="fas fa-door-open"></i> Sala: ${roomName}<br>
                             <i class="fas fa-graduation-cap"></i> Série: ${grade}<br>
                             <i class="fas fa-calendar"></i> Data do Pagamento: ${paymentDate}<br>
                             <button class="confirm-payment">Confirmar Pagamento</button>`;
  
    // Adicionar o item à lista de pagamentos
    var paymentList = document.getElementById('paymentList');
    paymentList.appendChild(paymentItem);
  
    // Limpar os campos de entrada
    document.getElementById('schoolName').value = '';
    document.getElementById('roomName').value = '';
    document.getElementById('grade').value = '';
    document.getElementById('studentName').value = '';
    document.getElementById('paymentDate').value = '';
  });
  
  document.getElementById('paymentList').addEventListener('click', function(event) {
    if (event.target.classList.contains('confirm-payment')) {
      var paymentItem = event.target.parentNode;
      paymentItem.classList.toggle('confirmed');
    }
  });
  