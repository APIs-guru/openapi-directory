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
var TemplatesFetchPathParams = /** @class */ (function (_super) {
    __extends(TemplatesFetchPathParams, _super);
    function TemplatesFetchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TemplatesFetchPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=templateId" }),
        __metadata("design:type", String)
    ], TemplatesFetchPathParams.prototype, "templateId", void 0);
    return TemplatesFetchPathParams;
}(SpeakeasyBase));
export { TemplatesFetchPathParams };
var TemplatesFetchSecurity = /** @class */ (function (_super) {
    __extends(TemplatesFetchSecurity, _super);
    function TemplatesFetchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSakariAuth)
    ], TemplatesFetchSecurity.prototype, "sakariAuth", void 0);
    return TemplatesFetchSecurity;
}(SpeakeasyBase));
export { TemplatesFetchSecurity };
var TemplatesFetchRequest = /** @class */ (function (_super) {
    __extends(TemplatesFetchRequest, _super);
    function TemplatesFetchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TemplatesFetchPathParams)
    ], TemplatesFetchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TemplatesFetchSecurity)
    ], TemplatesFetchRequest.prototype, "security", void 0);
    return TemplatesFetchRequest;
}(SpeakeasyBase));
export { TemplatesFetchRequest };
var TemplatesFetchResponse = /** @class */ (function (_super) {
    __extends(TemplatesFetchResponse, _super);
    function TemplatesFetchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TemplatesFetchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TemplatesFetchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TemplateResponse)
    ], TemplatesFetchResponse.prototype, "templateResponse", void 0);
    return TemplatesFetchResponse;
}(SpeakeasyBase));
export { TemplatesFetchResponse };
