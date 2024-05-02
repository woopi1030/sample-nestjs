// NestFactory는 NestJS 애플리케이션을 생성하고 실행하는 데 사용되는 클래스
import { NestFactory } from '@nestjs/core';
// AppModule은 NestJS 애플리케이션의 주 모듈. 다른 모듈과 서비스를 등록하고 애플리케이션 구성을 정의함.
import { AppModule } from './app.module';

// async 키워드는 함수를 비동기 함수로 선언
// await 키워드를 사용하여 비동기 작업을 처리
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
