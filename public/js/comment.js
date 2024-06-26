const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#comment-box').value.trim()
    const post_id = event.target.getAttribute('data-id')
  
    if (comment && post_id) {
     
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({comment, post_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('Failed to create comment');
      }
    }
  };
  
  const delCommentHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const post_id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/comments/${post_id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace(`/post/${post_id}`);
      } else {
        alert('Failed to delete comment');
      }
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);
  
  document
    .querySelector('.comment-list')
    .addEventListener('click', delCommentHandler);
  