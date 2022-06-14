export class QuizItem {
  constructor({
    id = 0,
    question = '',
    answer = '',
    buttonContent = '',
    hint = '',
    successMessage = '',
    errorMessage = '😲 Really!?',
    imageUrl = '',
  }: Partial<QuizItem>) {
    this.question = question;
    this.answer = answer;
    this.buttonContent = buttonContent;
    this.hint = hint;
    this.successMessage = successMessage;
    this.errorMessage = errorMessage;
    this.id = id;
    this.imageUrl = imageUrl;
  }

  public id: number;
  public question: string;
  public answer: string;
  public buttonContent: string;
  public hint: string;
  public successMessage: string;
  public errorMessage: string;
  public imageUrl: string;
}
