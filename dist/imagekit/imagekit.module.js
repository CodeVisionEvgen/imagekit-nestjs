"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ImageKitModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageKitModule = void 0;
const common_1 = require("@nestjs/common");
const imagekit_service_1 = require("./imagekit.service");
let ImageKitModule = ImageKitModule_1 = class ImageKitModule {
    static forRoot(options) {
        const module = {
            module: ImageKitModule_1,
            providers: [
                {
                    provide: imagekit_service_1.ImageKitService,
                    useFactory: () => new imagekit_service_1.ImageKitService(options.publicKey, options.privateKey, options.urlEndpoint),
                },
            ],
            exports: [imagekit_service_1.ImageKitService],
        };
        if (options.isGlobal) {
            module.global = true;
        }
        return module;
    }
    static forRootAsync(options) {
        const asyncOptionsProvider = {
            provide: "IMAGEKIT_MODULE_OPTIONS",
            useFactory: options.useFactory,
            inject: options.inject || [],
        };
        const imageKitServiceProvider = {
            provide: imagekit_service_1.ImageKitService,
            useFactory: (opts) => new imagekit_service_1.ImageKitService(opts.publicKey, opts.privateKey, opts.urlEndpoint),
            inject: ["IMAGEKIT_MODULE_OPTIONS"],
        };
        const dynamicModule = {
            module: ImageKitModule_1,
            providers: [asyncOptionsProvider, imageKitServiceProvider],
            exports: [imagekit_service_1.ImageKitService],
            imports: options.imports || [],
        };
        if (options.isGlobal) {
            dynamicModule.global = true;
        }
        return dynamicModule;
    }
};
exports.ImageKitModule = ImageKitModule;
exports.ImageKitModule = ImageKitModule = ImageKitModule_1 = __decorate([
    (0, common_1.Module)({})
], ImageKitModule);
//# sourceMappingURL=imagekit.module.js.map