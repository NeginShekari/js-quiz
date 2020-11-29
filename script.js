const questions = [
  {
    id: 1,
    title:
      'برای اینکه لینک در صفحه یا تب جدید باز شود، از کدام صفت استفاده میشود؟',
    options: [
      {
        key: 1,
        title: '_blank'
      },
      {
        key: 2,
        title: '_self'
      },
      {
        key: 3,
        title: '_new'
      },
      {
        key: 4,
        title: '_parent'
      }
    ],
    answerKey: 1
  },
  {
    id: 2,
    title:
      'کدام عملگر true برمیگرداند اگر دو مقداری که با هم مقایسه میشوند، برابر نباشند؟',
    options: [
      {
        key: 1,
        title: '<>'
      },
      {
        key: 2,
        title: '~'
      },
      {
        key: 3,
        title: '==!'
      },
      {
        key: 4,
        title: '!=='
      }
    ],
    answerKey: 4
  },
  {
    id: 3,
    title: 'کدام یک کلمه کلیدی در جاوااسکریپت نیست؟',
    options: [
      {
        key: 1,
        title: 'this'
      },
      {
        key: 2,
        title: 'catch'
      },
      {
        key: 3,
        title: 'function'
      },
      {
        key: 4,
        title: 'array'
      }
    ],
    answerKey: 4
  },
  {
    id: 4,
    title:
      'کدام یک راه درست برای اینکه تعداد پاراگراف‌های موجود در صفحه را بدست بیاوریم با استفاده از jquery است؟',
    options: [
      {
        key: 1,
        title: '$("p").count()'
      },
      {
        key: 2,
        title: '$("p").length'
      },
      {
        key: 3,
        title: '$("*").find("p")'
      },
      {
        key: 4,
        title: '$("p").length()'
      }
    ],
    answerKey: 2
  }
];
$('#quizForm').empty();
questions.forEach(question => {
  $('#quizForm').append(`<div class="question">
                    <h3>${question.title}</h3>
                        <div class="choices">
                            <div class="choice">
                              <label for="">${question.options[0].title}</label>
                              <input type="radio" name="question${question.id}" value="${question.options[0].key}" />
                            </div>
                            <div class="choice">
                              <label>${question.options[1].title}</label>
                              <input type="radio" name="question${question.id}" value="${question.options[1].key}" />
                            </div>
                            <div class="choice">
                              <label>${question.options[2].title}</label>
                              <input type="radio" name="question${question.id}" value="${question.options[2].key}" />
                            </div>
                            <div class="choice">
                              <label>${question.options[3].title}</label>
                              <input type="radio" name="question${question.id}" value="${question.options[3].key}" />
                            </div>
                          </div></div>`);
  
})
$('#quizForm').append('<button type="submit">ثبت</button>');
$('#emptyAnswers').html('4');
let winScore = 0
let emptyScore = 0;
let looseScore = 0;
$('button[type=submit]').click(
  function(e){
    e.preventDefault();
    for (let i = 0; i < questions.length; i++) {
      if ($(`input:radio[name="question${questions[i].id}"]`).is(':checked')) {
          if ($(`input:radio[name="question${questions[i].id}"]:checked`).val() == questions[i].answerKey) 
          {
            winScore++;
          }
          else
          {
            looseScore++;
          }
      }
      else
      {
        emptyScore++;
      }
    }
    $('#rightAnswers').html(winScore);
    $('#emptyAnswers').html(emptyScore);
    $('#wrongAnswers').html(looseScore);
    winScore = 0
    emptyScore = 0;
    looseScore = 0;
  }
)
