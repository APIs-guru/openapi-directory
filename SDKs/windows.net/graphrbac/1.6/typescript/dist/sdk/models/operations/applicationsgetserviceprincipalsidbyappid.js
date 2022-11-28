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
var ApplicationsGetServicePrincipalsIdByAppIdPathParams = /** @class */ (function (_super) {
    __extends(ApplicationsGetServicePrincipalsIdByAppIdPathParams, _super);
    function ApplicationsGetServicePrincipalsIdByAppIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationID" }),
        __metadata("design:type", String)
    ], ApplicationsGetServicePrincipalsIdByAppIdPathParams.prototype, "applicationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], ApplicationsGetServicePrincipalsIdByAppIdPathParams.prototype, "tenantId", void 0);
    return ApplicationsGetServicePrincipalsIdByAppIdPathParams;
}(SpeakeasyBase));
export { ApplicationsGetServicePrincipalsIdByAppIdPathParams };
var ApplicationsGetServicePrincipalsIdByAppIdQueryParams = /** @class */ (function (_super) {
    __extends(ApplicationsGetServicePrincipalsIdByAppIdQueryParams, _super);
    function ApplicationsGetServicePrincipalsIdByAppIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ApplicationsGetServicePrincipalsIdByAppIdQueryParams.prototype, "apiVersion", void 0);
    return ApplicationsGetServicePrincipalsIdByAppIdQueryParams;
}(SpeakeasyBase));
export { ApplicationsGetServicePrincipalsIdByAppIdQueryParams };
var ApplicationsGetServicePrincipalsIdByAppIdRequest = /** @class */ (function (_super) {
    __extends(ApplicationsGetServicePrincipalsIdByAppIdRequest, _super);
    function ApplicationsGetServicePrincipalsIdByAppIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplicationsGetServicePrincipalsIdByAppIdPathParams)
    ], ApplicationsGetServicePrincipalsIdByAppIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplicationsGetServicePrincipalsIdByAppIdQueryParams)
    ], ApplicationsGetServicePrincipalsIdByAppIdRequest.prototype, "queryParams", void 0);
    return ApplicationsGetServicePrincipalsIdByAppIdRequest;
}(SpeakeasyBase));
export { ApplicationsGetServicePrincipalsIdByAppIdRequest };
var ApplicationsGetServicePrincipalsIdByAppIdResponse = /** @class */ (function (_super) {
    __extends(ApplicationsGetServicePrincipalsIdByAppIdResponse, _super);
    function ApplicationsGetServicePrincipalsIdByAppIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApplicationsGetServicePrincipalsIdByAppIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], ApplicationsGetServicePrincipalsIdByAppIdResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServicePrincipalObjectResult)
    ], ApplicationsGetServicePrincipalsIdByAppIdResponse.prototype, "servicePrincipalObjectResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApplicationsGetServicePrincipalsIdByAppIdResponse.prototype, "statusCode", void 0);
    return ApplicationsGetServicePrincipalsIdByAppIdResponse;
}(SpeakeasyBase));
export { ApplicationsGetServicePrincipalsIdByAppIdResponse };
