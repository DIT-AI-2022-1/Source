#define LED 6

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(LED, OUTPUT);

}

void loop() {
  // put your main code here, to run repeatedly:
  while(Serial.available()) {
    int value = Serial.read();
    if(value == 1) {
      digitalWrite(LED, 1);
    } else if(value == 0) {
      digitalWrite(LED, 0);
    }
  }

}
