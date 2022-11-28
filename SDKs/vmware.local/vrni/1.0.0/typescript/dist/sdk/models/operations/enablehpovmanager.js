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
var EnableHpovManagerPathParams = /** @class */ (function (_super) {
    __extends(EnableHpovManagerPathParams, _super);
    function EnableHpovManagerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], EnableHpovManagerPathParams.prototype, "id", void 0);
    return EnableHpovManagerPathParams;
}(SpeakeasyBase));
export { EnableHpovManagerPathParams };
var EnableHpovManagerSecurity = /** @class */ (function (_super) {
    __extends(EnableHpovManagerSecurity, _super);
    function EnableHpovManagerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], EnableHpovManagerSecurity.prototype, "apiKeyAuth", void 0);
    return EnableHpovManagerSecurity;
}(SpeakeasyBase));
export { EnableHpovManagerSecurity };
var EnableHpovManagerRequest = /** @class */ (function (_super) {
    __extends(EnableHpovManagerRequest, _super);
    function EnableHpovManagerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnableHpovManagerPathParams)
    ], EnableHpovManagerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EnableHpovManagerSecurity)
    ], EnableHpovManagerRequest.prototype, "security", void 0);
    return EnableHpovManagerRequest;
}(SpeakeasyBase));
export { EnableHpovManagerRequest };
var EnableHpovManagerResponse = /** @class */ (function (_super) {
    __extends(EnableHpovManagerResponse, _super);
    function EnableHpovManagerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EnableHpovManagerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EnableHpovManagerResponse.prototype, "statusCode", void 0);
    return EnableHpovManagerResponse;
}(SpeakeasyBase));
export { EnableHpovManagerResponse };
