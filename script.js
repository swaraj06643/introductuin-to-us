document.addEventListener("DOMContentLoaded", () => {
    const members = document.querySelectorAll('.team-member');
    const memberName = document.getElementById('memberName');
    const memberRole = document.getElementById('memberRole');
    const memberBio = document.getElementById('memberBio');
    
    // Show the first member's info initially
    showMemberInfo(members[0]);

    // Event listeners for each team member
    members.forEach(member => {
        member.addEventListener('click', () => {
            showMemberInfo(member);
        });
    });

    function showMemberInfo(member) {
        memberName.textContent = member.getAttribute('data-name');
        memberRole.textContent = member.getAttribute('data-role');
        memberBio.textContent = member.getAttribute('data-bio');
    }

    // Carousel effect
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % members.length;
        const offset = -currentIndex * 170; // Adjust based on member size
        document.getElementById('teamCarousel').style.transform = `translateX(${offset}px)`;
        showMemberInfo(members[currentIndex]);
    }, 3000);
});
