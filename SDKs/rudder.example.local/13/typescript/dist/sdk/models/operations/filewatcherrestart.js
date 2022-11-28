var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var FileWatcherRestart200ApplicationJsonActionEnum;
(function (FileWatcherRestart200ApplicationJsonActionEnum) {
    FileWatcherRestart200ApplicationJsonActionEnum["FileWatcherRestart"] = "fileWatcherRestart";
})(FileWatcherRestart200ApplicationJsonActionEnum || (FileWatcherRestart200ApplicationJsonActionEnum = {}));
export var FileWatcherRestart200ApplicationJsonResultEnum;
(function (FileWatcherRestart200ApplicationJsonResultEnum) {
    FileWatcherRestart200ApplicationJsonResultEnum["Success"] = "success";
    FileWatcherRestart200ApplicationJsonResultEnum["Error"] = "error";
})(FileWatcherRestart200ApplicationJsonResultEnum || (FileWatcherRestart200ApplicationJsonResultEnum = {}));
var FileWatcherRestart200ApplicationJson = /** @class */ (function (_super) {
    __extends(FileWatcherRestart200ApplicationJson, _super);
    function FileWatcherRestart200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], FileWatcherRestart200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], FileWatcherRestart200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], FileWatcherRestart200ApplicationJson.prototype, "result", void 0);
    return FileWatcherRestart200ApplicationJson;
}(SpeakeasyBase));
export { FileWatcherRestart200ApplicationJson };
var FileWatcherRestartResponse = /** @class */ (function (_super) {
    __extends(FileWatcherRestartResponse, _super);
    function FileWatcherRestartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FileWatcherRestartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FileWatcherRestartResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileWatcherRestart200ApplicationJson)
    ], FileWatcherRestartResponse.prototype, "fileWatcherRestart200ApplicationJsonObject", void 0);
    return FileWatcherRestartResponse;
}(SpeakeasyBase));
export { FileWatcherRestartResponse };
