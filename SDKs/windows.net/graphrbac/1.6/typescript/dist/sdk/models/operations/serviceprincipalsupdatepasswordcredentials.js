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
var ServicePrincipalsUpdatePasswordCredentialsPathParams = /** @class */ (function (_super) {
    __extends(ServicePrincipalsUpdatePasswordCredentialsPathParams, _super);
    function ServicePrincipalsUpdatePasswordCredentialsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" }),
        __metadata("design:type", String)
    ], ServicePrincipalsUpdatePasswordCredentialsPathParams.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], ServicePrincipalsUpdatePasswordCredentialsPathParams.prototype, "tenantId", void 0);
    return ServicePrincipalsUpdatePasswordCredentialsPathParams;
}(SpeakeasyBase));
export { ServicePrincipalsUpdatePasswordCredentialsPathParams };
var ServicePrincipalsUpdatePasswordCredentialsQueryParams = /** @class */ (function (_super) {
    __extends(ServicePrincipalsUpdatePasswordCredentialsQueryParams, _super);
    function ServicePrincipalsUpdatePasswordCredentialsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ServicePrincipalsUpdatePasswordCredentialsQueryParams.prototype, "apiVersion", void 0);
    return ServicePrincipalsUpdatePasswordCredentialsQueryParams;
}(SpeakeasyBase));
export { ServicePrincipalsUpdatePasswordCredentialsQueryParams };
var ServicePrincipalsUpdatePasswordCredentialsRequests = /** @class */ (function (_super) {
    __extends(ServicePrincipalsUpdatePasswordCredentialsRequests, _super);
    function ServicePrincipalsUpdatePasswordCredentialsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PasswordCredentialsUpdateParameters)
    ], ServicePrincipalsUpdatePasswordCredentialsRequests.prototype, "passwordCredentialsUpdateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.PasswordCredentialsUpdateParameters)
    ], ServicePrincipalsUpdatePasswordCredentialsRequests.prototype, "passwordCredentialsUpdateParameters1", void 0);
    return ServicePrincipalsUpdatePasswordCredentialsRequests;
}(SpeakeasyBase));
export { ServicePrincipalsUpdatePasswordCredentialsRequests };
var ServicePrincipalsUpdatePasswordCredentialsRequest = /** @class */ (function (_super) {
    __extends(ServicePrincipalsUpdatePasswordCredentialsRequest, _super);
    function ServicePrincipalsUpdatePasswordCredentialsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsUpdatePasswordCredentialsPathParams)
    ], ServicePrincipalsUpdatePasswordCredentialsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsUpdatePasswordCredentialsQueryParams)
    ], ServicePrincipalsUpdatePasswordCredentialsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsUpdatePasswordCredentialsRequests)
    ], ServicePrincipalsUpdatePasswordCredentialsRequest.prototype, "request", void 0);
    return ServicePrincipalsUpdatePasswordCredentialsRequest;
}(SpeakeasyBase));
export { ServicePrincipalsUpdatePasswordCredentialsRequest };
var ServicePrincipalsUpdatePasswordCredentialsResponse = /** @class */ (function (_super) {
    __extends(ServicePrincipalsUpdatePasswordCredentialsResponse, _super);
    function ServicePrincipalsUpdatePasswordCredentialsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicePrincipalsUpdatePasswordCredentialsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], ServicePrincipalsUpdatePasswordCredentialsResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicePrincipalsUpdatePasswordCredentialsResponse.prototype, "statusCode", void 0);
    return ServicePrincipalsUpdatePasswordCredentialsResponse;
}(SpeakeasyBase));
export { ServicePrincipalsUpdatePasswordCredentialsResponse };
