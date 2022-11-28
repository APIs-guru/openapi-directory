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
var EnableHpvcManagerPathParams = /** @class */ (function (_super) {
    __extends(EnableHpvcManagerPathParams, _super);
    function EnableHpvcManagerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], EnableHpvcManagerPathParams.prototype, "id", void 0);
    return EnableHpvcManagerPathParams;
}(SpeakeasyBase));
export { EnableHpvcManagerPathParams };
var EnableHpvcManagerSecurity = /** @class */ (function (_super) {
    __extends(EnableHpvcManagerSecurity, _super);
    function EnableHpvcManagerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], EnableHpvcManagerSecurity.prototype, "apiKeyAuth", void 0);
    return EnableHpvcManagerSecurity;
}(SpeakeasyBase));
export { EnableHpvcManagerSecurity };
var EnableHpvcManagerRequest = /** @class */ (function (_super) {
    __extends(EnableHpvcManagerRequest, _super);
    function EnableHpvcManagerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnableHpvcManagerPathParams)
    ], EnableHpvcManagerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnableHpvcManagerSecurity)
    ], EnableHpvcManagerRequest.prototype, "security", void 0);
    return EnableHpvcManagerRequest;
}(SpeakeasyBase));
export { EnableHpvcManagerRequest };
var EnableHpvcManagerResponse = /** @class */ (function (_super) {
    __extends(EnableHpvcManagerResponse, _super);
    function EnableHpvcManagerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnableHpvcManagerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnableHpvcManagerResponse.prototype, "statusCode", void 0);
    return EnableHpvcManagerResponse;
}(SpeakeasyBase));
export { EnableHpvcManagerResponse };
