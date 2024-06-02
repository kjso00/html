document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 막기
    const username = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    const messageDiv = document.getElementById('message');
    if (username === 'user' && password === 'pass') {
        messageDiv.textContent = '로그인 성공!';
        messageDiv.style.color = 'green';
        window.location.href = 'main.html'; // 메인 페이지로 이동
    } else {
        messageDiv.textContent = '로그인 실패. 사용자 이름과 비밀번호를 확인하세요.';
        messageDiv.style.color = 'red';
    }
});
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 막기
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const newId = document.getElementById('newId').value;
    const newUserPhone = document.getElementById('newUserPhone').value;
    


    const messageDiv = document.getElementById('message');
    if (newUsername && newPassword && newId && newUserPhone) {
        messageDiv.textContent = '회원가입 성공!';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = '회원가입 실패. 모든 필드를 채워주세요.';
        messageDiv.style.color = 'red';
    }
});
