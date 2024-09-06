# ImageKit NestJS Module

[![npm version](https://badge.fury.io/js/imagekit-nestjs.svg)](https://badge.fury.io/js/imagekit-nestjs)

This module integrates [ImageKit](https://imagekit.io/) with the [NestJS](https://nestjs.com/) framework, allowing you to easily use ImageKit's features in your NestJS applications.

## Installation

First, install the package via npm:

```sh
npm install imagekit-nestjs
```

# Configuration

You can configure the ImageKitModule asynchronously to load your ImageKit credentials.
Example with NestJS Config Module

First, install the necessary packages:

```sh
npm install @nestjs/config
```

Then, create a configuration file (e.g., configs/imagekit.config.ts):

```ts
import { ConfigService } from "@nestjs/config";
import { ImageKitModuleOptions } from "imagekit-nestjs";

export const ImageKitConfig = (
  configService: ConfigService
): ImageKitModuleOptions => ({
  privateKey: configService.get("IMAGEKIT_PRIVATE_KEY"),
  publicKey: configService.get("IMAGEKIT_PUBLIC_KEY"),
  urlEndpoint: configService.get("IMAGEKIT_URL_ENDPOINT"),
});
```

Update your AppModule to import the ImageKitModule with the configuration:

```ts
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ImageKitModule } from "imagekit-nestjs";
import { ImageKitConfig } from "configs/imagekit.conf";

@Module({
  imports: [
    ImageKitModule.forRootAsync({
      useFactory: ImageKitConfig,
      inject: [ConfigService],
      imports: [ConfigModule],
      isGlobal: true, // is optional
    }),
  ],
})
export class AppModule {}
```

# Usage

You can now inject the ImageKitService into your controllers or services and use its methods.
Example Controller

```ts
import { Controller, Get } from "@nestjs/common";
import { ImageKitService } from "imagekit-nestjs";

@Controller("images")
export class ImagesController {
  constructor(private readonly imageKitService: ImageKitService) {}

  @Get("upload")
  async uploadImage() {
    const result = await this.imageKitService.upload({
      file: "your_file_path",
      fileName: "example.jpg",
    });
    return result;
  }
}
```

# Example Service

```ts
import { Injectable } from "@nestjs/common";
import { ImageKitService } from "imagekit-nestjs";

@Injectable()
export class ImagesService {
  constructor(private readonly imageKitService: ImageKitService) {}

  async uploadImage(filePath: string, fileName: string) {
    const result = await this.imageKitService.upload({
      file: filePath,
      fileName: fileName,
    });
    return result;
  }
}
```

# Using ImageKit Methods

The ImageKitService extends the official ImageKit library, so you can use all methods provided by the ImageKit library. Here are some examples:
Upload an Image

```ts
const uploadResponse = await this.imageKitService.upload({
  file: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA...",
  fileName: "example.png",
});
console.log(uploadResponse);
```

# Get File Details

```ts
const fileDetails = await this.imageKitService.getFileDetails("fileId");
console.log(fileDetails);
```

# List Files

```ts
const fileList = await this.imageKitService.listFiles({
  skip: 0,
  limit: 10,
});
console.log(fileList);
```

# Delete a File

```ts
const deleteResponse = await this.imageKitService.deleteFile("fileId");
console.log(deleteResponse);
```

Refer to the official ImageKit documentation for more details on available methods.
API
ImageKitService

The ImageKitService extends the official ImageKit library, so all methods from the ImageKit library are available. Refer to the official ImageKit documentation for more details.
Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.
