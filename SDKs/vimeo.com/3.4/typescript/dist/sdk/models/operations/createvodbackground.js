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
var CreateVodBackgroundPathParams = /** @class */ (function (_super) {
    __extends(CreateVodBackgroundPathParams, _super);
    function CreateVodBackgroundPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" }),
        __metadata("design:type", Number)
    ], CreateVodBackgroundPathParams.prototype, "ondemandId", void 0);
    return CreateVodBackgroundPathParams;
}(SpeakeasyBase));
export { CreateVodBackgroundPathParams };
var CreateVodBackgroundSecurity = /** @class */ (function (_super) {
    __extends(CreateVodBackgroundSecurity, _super);
    function CreateVodBackgroundSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CreateVodBackgroundSecurity.prototype, "oauth2", void 0);
    return CreateVodBackgroundSecurity;
}(SpeakeasyBase));
export { CreateVodBackgroundSecurity };
var CreateVodBackgroundRequest = /** @class */ (function (_super) {
    __extends(CreateVodBackgroundRequest, _super);
    function CreateVodBackgroundRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVodBackgroundPathParams)
    ], CreateVodBackgroundRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateVodBackgroundSecurity)
    ], CreateVodBackgroundRequest.prototype, "security", void 0);
    return CreateVodBackgroundRequest;
}(SpeakeasyBase));
export { CreateVodBackgroundRequest };
var CreateVodBackgroundResponse = /** @class */ (function (_super) {
    __extends(CreateVodBackgroundResponse, _super);
    function CreateVodBackgroundResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateVodBackgroundResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateVodBackgroundResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LegacyError)
    ], CreateVodBackgroundResponse.prototype, "legacyError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Picture)
    ], CreateVodBackgroundResponse.prototype, "picture", void 0);
    return CreateVodBackgroundResponse;
}(SpeakeasyBase));
export { CreateVodBackgroundResponse };
