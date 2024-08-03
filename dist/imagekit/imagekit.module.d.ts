import { DynamicModule } from "@nestjs/common";
import { ImageKitModuleOptions } from "./imagekit.config";
export declare class ImageKitModule {
    static forRootAsync(options: {
        useFactory: (...args: any[]) => Promise<ImageKitModuleOptions> | ImageKitModuleOptions;
        inject?: any[];
        isGlobal?: boolean;
    }): DynamicModule;
}
