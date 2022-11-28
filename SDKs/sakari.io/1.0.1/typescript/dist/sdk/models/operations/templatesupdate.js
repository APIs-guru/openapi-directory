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
var TemplatesUpdatePathParams = /** @class */ (function (_super) {
    __extends(TemplatesUpdatePathParams, _super);
    function TemplatesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TemplatesUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateId" }),
        __metadata("design:type", String)
    ], TemplatesUpdatePathParams.prototype, "templateId", void 0);
    return TemplatesUpdatePathParams;
}(SpeakeasyBase));
export { TemplatesUpdatePathParams };
var TemplatesUpdateSecurity = /** @class */ (function (_super) {
    __extends(TemplatesUpdateSecurity, _super);
    function TemplatesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSakariAuth)
    ], TemplatesUpdateSecurity.prototype, "sakariAuth", void 0);
    return TemplatesUpdateSecurity;
}(SpeakeasyBase));
export { TemplatesUpdateSecurity };
var TemplatesUpdateRequest = /** @class */ (function (_super) {
    __extends(TemplatesUpdateRequest, _super);
    function TemplatesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TemplatesUpdatePathParams)
    ], TemplatesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TemplatesUpdateSecurity)
    ], TemplatesUpdateRequest.prototype, "security", void 0);
    return TemplatesUpdateRequest;
}(SpeakeasyBase));
export { TemplatesUpdateRequest };
var TemplatesUpdateResponse = /** @class */ (function (_super) {
    __extends(TemplatesUpdateResponse, _super);
    function TemplatesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TemplatesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TemplatesUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TemplateResponse)
    ], TemplatesUpdateResponse.prototype, "templateResponse", void 0);
    return TemplatesUpdateResponse;
}(SpeakeasyBase));
export { TemplatesUpdateResponse };
