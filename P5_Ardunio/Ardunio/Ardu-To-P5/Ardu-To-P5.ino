#define BUTTON 2

void setup() {
  // put your setup code here, to run once:
  pinMode(BUTTON, INPUT);
  Serial.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:
  int value = digitalRead(BUTTON);
  if(value == 0) {
    Serial.write(0);
  } else {
    Serial.write(1);
  }
  delay(20);
}
