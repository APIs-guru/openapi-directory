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
var ServicePrincipalsUpdatePathParams = /** @class */ (function (_super) {
    __extends(ServicePrincipalsUpdatePathParams, _super);
    function ServicePrincipalsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" }),
        __metadata("design:type", String)
    ], ServicePrincipalsUpdatePathParams.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], ServicePrincipalsUpdatePathParams.prototype, "tenantId", void 0);
    return ServicePrincipalsUpdatePathParams;
}(SpeakeasyBase));
export { ServicePrincipalsUpdatePathParams };
var ServicePrincipalsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ServicePrincipalsUpdateQueryParams, _super);
    function ServicePrincipalsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ServicePrincipalsUpdateQueryParams.prototype, "apiVersion", void 0);
    return ServicePrincipalsUpdateQueryParams;
}(SpeakeasyBase));
export { ServicePrincipalsUpdateQueryParams };
var ServicePrincipalsUpdateRequests = /** @class */ (function (_super) {
    __extends(ServicePrincipalsUpdateRequests, _super);
    function ServicePrincipalsUpdateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ServicePrincipalUpdateParameters)
    ], ServicePrincipalsUpdateRequests.prototype, "servicePrincipalUpdateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ServicePrincipalUpdateParameters)
    ], ServicePrincipalsUpdateRequests.prototype, "servicePrincipalUpdateParameters1", void 0);
    return ServicePrincipalsUpdateRequests;
}(SpeakeasyBase));
export { ServicePrincipalsUpdateRequests };
var ServicePrincipalsUpdateRequest = /** @class */ (function (_super) {
    __extends(ServicePrincipalsUpdateRequest, _super);
    function ServicePrincipalsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsUpdatePathParams)
    ], ServicePrincipalsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsUpdateQueryParams)
    ], ServicePrincipalsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsUpdateRequests)
    ], ServicePrincipalsUpdateRequest.prototype, "request", void 0);
    return ServicePrincipalsUpdateRequest;
}(SpeakeasyBase));
export { ServicePrincipalsUpdateRequest };
var ServicePrincipalsUpdateResponse = /** @class */ (function (_super) {
    __extends(ServicePrincipalsUpdateResponse, _super);
    function ServicePrincipalsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicePrincipalsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], ServicePrincipalsUpdateResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicePrincipalsUpdateResponse.prototype, "statusCode", void 0);
    return ServicePrincipalsUpdateResponse;
}(SpeakeasyBase));
export { ServicePrincipalsUpdateResponse };
