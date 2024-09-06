import { DynamicModule } from "@nestjs/common";
import { ImageKitModuleOptions } from "./imagekit.config";
export declare class ImageKitModule {
    static forRoot(options: ImageKitModuleOptions & {
        isGlobal?: boolean;
    }): DynamicModule;
    static forRootAsync(options: {
        useFactory: (...args: any[]) => Promise<ImageKitModuleOptions> | ImageKitModuleOptions;
        inject?: any[];
        imports?: any[];
        isGlobal?: boolean;
    }): DynamicModule;
}
