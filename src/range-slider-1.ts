// 1. Импортируем noUiSlider и его типы
import './nouislider.css';
import noUiSlider from 'nouislider'; // Обратите внимание на этот импорт

// 2. Используем импортированный тип Instance для типизации элемента
const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [30, 100],
    connect: true,
    step: 1,
    range: {
      min: [0],
      max: [100],
    },
  });

  // 3. Теперь, когда слайдер создан, мы можем безопасно работать с ним.
  // Если вам нужна типизация для rangeSlider после создания, вы можете
  // привести его к типу noUiSlider.Instance.
  const sliderInstance = rangeSlider as noUiSlider.Instance;

  const input0 = document.getElementById('input-0') as HTMLInputElement;
  const input1 = document.getElementById('input-1') as HTMLInputElement;

  if (input0 && input1) {
    const inputs: HTMLInputElement[] = [input0, input1];

    sliderInstance.noUiSlider.on('update', function (values, handle) {
      const value = Math.round(Number(values[handle]));
      inputs[handle].value = String(value);
    });

    const setRangeSlider = (i: number, value: string): void => {
      const numericValue = Number(value);
      const arr: (number | null)[] = [null, null];

      if (!isNaN(numericValue)) {
        arr[i] = numericValue;
        sliderInstance.noUiSlider.set(arr);
      }
    };

    inputs.forEach((el, index) => {
      el.addEventListener('change', (e: Event) => {
        const target = e.currentTarget as HTMLInputElement;
        setRangeSlider(index, target.value);
      });
      el.style.color = '#1d2e5b';
    });
  }
}
