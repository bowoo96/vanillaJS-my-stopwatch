# 팀원

- 김보우
- 김승원
- 전찬민

# 구현된 모습
<a href="https://vanillajs-my-stopwatch-bowoo.netlify.app/">vanillajs-my-stopwatch</a>
---

# Skill & Tools

- HTML
- CSS
- VANILLA JAVASCRIPT

---

# 기능

### **Start**

1. 만약 Interval이 있으면 setInterval 함수를 0.01초 마다 실행시킨다.
    1. milliSecond + 1 해준다.
    2. 만약 milliSecond가 60이면
        1. milliSecond = 0
        2. second + 1
    3. 만약 second가 60이면
        1. second = 0
        2. minute + 1
    4. 만약 minute이 60이면
        1. 스탑워치를 중지 시킨다.
    5. 화면에 시간을 출력한다.

### **Stop**

1. clearInterval 함수를 호출하여 interval 멈춰준다.
2. 인터벌 변수를 비운다.

### **Reset**

1. 모든 시간 변수(minute, seconde, milliSecond) 초기화한다.
2. 화면에 있는 시간 00:00.00 으로 초기화한다.
3. 인터벌 중지 및 인터벌 변수 비운다.
4. 기록 내용을 초기화한다.
5. history 배열을 초기화한다.

### **Lap**

1. 기록 배열에 현재 분, 초, 밀리초 String 형태로 push한다.
2. ul 요소를 찾아온다.
3. 만약 ul 요소가 없으면
    1. ul 요소를 만들어준다.
    2. wrapper에 ul 삽입한다.
4. li 요소를 만든다.
5. li 요소의 text에 기록정보를 입력한다.
6. ul 요소에 li 요소를 첫번째 요소에 넣는다.

---

# 이 프로젝트를 하는 목적

---

# 어려웠던 점 & 해결방법

- interval 을 생성하고 clear를 해주는데 clear가 먹히지 않았음
    - 원인: 생성된 해당 interval을 clear해주어야 하는데 다른 때 생성된 interval을 clear 해주어서 먹히지 않는 것이었음
    - 해결방법: interval을 한 개만 생성해서 (싱글톤..?) 하나의 해당 interval을 clear 하도록 함

---

# 리팩토링

- start, stop 버튼을 합치고, reset과 lab버튼을 합쳐서 버튼 2개가 조건에 따라 교차되면서 보여지게 제작.
- React로 리팩토링.

---

# 회고

- 👻 **승원**
    - interval 개념에 대해 정확히 모르고 사용해서 문제가 풀리지 않았던 것 같다.
    → 사용할 대상에 대해 잘 알고 사용하자!

- 🤡 **보우**
    - 첫 프로젝트여서 코드를 너무 난잡하게 사용했다. 심지어 사용을 안하는 변수까지 발견.
        
        → 조금 더 코드를 알기 쉽게 작성을 해야겠음.
        
         
        
- 🙉 **찬민**
    - interval 을 처음 써본 프로젝트였다. 
    새로운 함수 및 메소드를 사용할 때, 개념을 확실하게 알고 가는 것이 중요할 것 같다.

---