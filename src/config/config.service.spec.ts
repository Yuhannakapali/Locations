// import { Test, TestingModule } from '@nestjs/testing';
import { join } from 'path';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    service = new ConfigService();
  });

  it('should indicate views Location', () => {
    const templatePath = join(__dirname, '../..', 'views');
    expect(service.get('template.path')).toEqual(templatePath);
  });

  it('checking the public', () => {
    const publicPath = join(__dirname, '../..', 'public');
    expect(service.get('public.path')).toEqual(publicPath);
  });
});
