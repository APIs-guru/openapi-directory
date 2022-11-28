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
export var FileWatcherStart200ApplicationJsonActionEnum;
(function (FileWatcherStart200ApplicationJsonActionEnum) {
    FileWatcherStart200ApplicationJsonActionEnum["FileWatcherStart"] = "fileWatcherStart";
})(FileWatcherStart200ApplicationJsonActionEnum || (FileWatcherStart200ApplicationJsonActionEnum = {}));
export var FileWatcherStart200ApplicationJsonResultEnum;
(function (FileWatcherStart200ApplicationJsonResultEnum) {
    FileWatcherStart200ApplicationJsonResultEnum["Success"] = "success";
    FileWatcherStart200ApplicationJsonResultEnum["Error"] = "error";
})(FileWatcherStart200ApplicationJsonResultEnum || (FileWatcherStart200ApplicationJsonResultEnum = {}));
var FileWatcherStart200ApplicationJson = /** @class */ (function (_super) {
    __extends(FileWatcherStart200ApplicationJson, _super);
    function FileWatcherStart200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], FileWatcherStart200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", String)
    ], FileWatcherStart200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], FileWatcherStart200ApplicationJson.prototype, "result", void 0);
    return FileWatcherStart200ApplicationJson;
}(SpeakeasyBase));
export { FileWatcherStart200ApplicationJson };
var FileWatcherStartResponse = /** @class */ (function (_super) {
    __extends(FileWatcherStartResponse, _super);
    function FileWatcherStartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FileWatcherStartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FileWatcherStartResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FileWatcherStart200ApplicationJson)
    ], FileWatcherStartResponse.prototype, "fileWatcherStart200ApplicationJsonObject", void 0);
    return FileWatcherStartResponse;
}(SpeakeasyBase));
export { FileWatcherStartResponse };
