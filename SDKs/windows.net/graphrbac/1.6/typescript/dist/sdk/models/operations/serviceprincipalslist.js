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
var ServicePrincipalsListPathParams = /** @class */ (function (_super) {
    __extends(ServicePrincipalsListPathParams, _super);
    function ServicePrincipalsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], ServicePrincipalsListPathParams.prototype, "tenantId", void 0);
    return ServicePrincipalsListPathParams;
}(SpeakeasyBase));
export { ServicePrincipalsListPathParams };
var ServicePrincipalsListQueryParams = /** @class */ (function (_super) {
    __extends(ServicePrincipalsListQueryParams, _super);
    function ServicePrincipalsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$filter" }),
        __metadata("design:type", String)
    ], ServicePrincipalsListQueryParams.prototype, "dollarFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ServicePrincipalsListQueryParams.prototype, "apiVersion", void 0);
    return ServicePrincipalsListQueryParams;
}(SpeakeasyBase));
export { ServicePrincipalsListQueryParams };
var ServicePrincipalsListRequest = /** @class */ (function (_super) {
    __extends(ServicePrincipalsListRequest, _super);
    function ServicePrincipalsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsListPathParams)
    ], ServicePrincipalsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsListQueryParams)
    ], ServicePrincipalsListRequest.prototype, "queryParams", void 0);
    return ServicePrincipalsListRequest;
}(SpeakeasyBase));
export { ServicePrincipalsListRequest };
var ServicePrincipalsListResponse = /** @class */ (function (_super) {
    __extends(ServicePrincipalsListResponse, _super);
    function ServicePrincipalsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicePrincipalsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], ServicePrincipalsListResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServicePrincipalListResult)
    ], ServicePrincipalsListResponse.prototype, "servicePrincipalListResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicePrincipalsListResponse.prototype, "statusCode", void 0);
    return ServicePrincipalsListResponse;
}(SpeakeasyBase));
export { ServicePrincipalsListResponse };
