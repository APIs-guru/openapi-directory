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
import * as shared from "../shared";
export var UpdateBRandingConf200ApplicationJsonActionEnum;
(function (UpdateBRandingConf200ApplicationJsonActionEnum) {
    UpdateBRandingConf200ApplicationJsonActionEnum["UpdateBRandingConf"] = "updateBRandingConf";
})(UpdateBRandingConf200ApplicationJsonActionEnum || (UpdateBRandingConf200ApplicationJsonActionEnum = {}));
var UpdateBRandingConf200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdateBRandingConf200ApplicationJsonData, _super);
    function UpdateBRandingConf200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=branding" }),
        __metadata("design:type", shared.BrandingConf)
    ], UpdateBRandingConf200ApplicationJsonData.prototype, "branding", void 0);
    return UpdateBRandingConf200ApplicationJsonData;
}(SpeakeasyBase));
export { UpdateBRandingConf200ApplicationJsonData };
export var UpdateBRandingConf200ApplicationJsonResultEnum;
(function (UpdateBRandingConf200ApplicationJsonResultEnum) {
    UpdateBRandingConf200ApplicationJsonResultEnum["Success"] = "success";
    UpdateBRandingConf200ApplicationJsonResultEnum["Error"] = "error";
})(UpdateBRandingConf200ApplicationJsonResultEnum || (UpdateBRandingConf200ApplicationJsonResultEnum = {}));
var UpdateBRandingConf200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateBRandingConf200ApplicationJson, _super);
    function UpdateBRandingConf200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateBRandingConf200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", UpdateBRandingConf200ApplicationJsonData)
    ], UpdateBRandingConf200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdateBRandingConf200ApplicationJson.prototype, "result", void 0);
    return UpdateBRandingConf200ApplicationJson;
}(SpeakeasyBase));
export { UpdateBRandingConf200ApplicationJson };
var UpdateBRandingConfRequest = /** @class */ (function (_super) {
    __extends(UpdateBRandingConfRequest, _super);
    function UpdateBRandingConfRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BrandingConf)
    ], UpdateBRandingConfRequest.prototype, "request", void 0);
    return UpdateBRandingConfRequest;
}(SpeakeasyBase));
export { UpdateBRandingConfRequest };
var UpdateBRandingConfResponse = /** @class */ (function (_super) {
    __extends(UpdateBRandingConfResponse, _super);
    function UpdateBRandingConfResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateBRandingConfResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateBRandingConfResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateBRandingConf200ApplicationJson)
    ], UpdateBRandingConfResponse.prototype, "updateBRandingConf200ApplicationJsonObject", void 0);
    return UpdateBRandingConfResponse;
}(SpeakeasyBase));
export { UpdateBRandingConfResponse };
