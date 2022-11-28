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
var TemplatesFetchAllPathParams = /** @class */ (function (_super) {
    __extends(TemplatesFetchAllPathParams, _super);
    function TemplatesFetchAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], TemplatesFetchAllPathParams.prototype, "accountId", void 0);
    return TemplatesFetchAllPathParams;
}(SpeakeasyBase));
export { TemplatesFetchAllPathParams };
var TemplatesFetchAllQueryParams = /** @class */ (function (_super) {
    __extends(TemplatesFetchAllQueryParams, _super);
    function TemplatesFetchAllQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], TemplatesFetchAllQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], TemplatesFetchAllQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], TemplatesFetchAllQueryParams.prototype, "offset", void 0);
    return TemplatesFetchAllQueryParams;
}(SpeakeasyBase));
export { TemplatesFetchAllQueryParams };
var TemplatesFetchAllSecurity = /** @class */ (function (_super) {
    __extends(TemplatesFetchAllSecurity, _super);
    function TemplatesFetchAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSakariAuth)
    ], TemplatesFetchAllSecurity.prototype, "sakariAuth", void 0);
    return TemplatesFetchAllSecurity;
}(SpeakeasyBase));
export { TemplatesFetchAllSecurity };
var TemplatesFetchAllRequest = /** @class */ (function (_super) {
    __extends(TemplatesFetchAllRequest, _super);
    function TemplatesFetchAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TemplatesFetchAllPathParams)
    ], TemplatesFetchAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TemplatesFetchAllQueryParams)
    ], TemplatesFetchAllRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TemplatesFetchAllSecurity)
    ], TemplatesFetchAllRequest.prototype, "security", void 0);
    return TemplatesFetchAllRequest;
}(SpeakeasyBase));
export { TemplatesFetchAllRequest };
var TemplatesFetchAllResponse = /** @class */ (function (_super) {
    __extends(TemplatesFetchAllResponse, _super);
    function TemplatesFetchAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TemplatesFetchAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], TemplatesFetchAllResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TemplatesFetchAllResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TemplatesResponse)
    ], TemplatesFetchAllResponse.prototype, "templatesResponse", void 0);
    return TemplatesFetchAllResponse;
}(SpeakeasyBase));
export { TemplatesFetchAllResponse };
