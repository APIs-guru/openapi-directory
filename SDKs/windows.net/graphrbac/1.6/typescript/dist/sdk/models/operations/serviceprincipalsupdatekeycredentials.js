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
var ServicePrincipalsUpdateKeyCredentialsPathParams = /** @class */ (function (_super) {
    __extends(ServicePrincipalsUpdateKeyCredentialsPathParams, _super);
    function ServicePrincipalsUpdateKeyCredentialsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" }),
        __metadata("design:type", String)
    ], ServicePrincipalsUpdateKeyCredentialsPathParams.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], ServicePrincipalsUpdateKeyCredentialsPathParams.prototype, "tenantId", void 0);
    return ServicePrincipalsUpdateKeyCredentialsPathParams;
}(SpeakeasyBase));
export { ServicePrincipalsUpdateKeyCredentialsPathParams };
var ServicePrincipalsUpdateKeyCredentialsQueryParams = /** @class */ (function (_super) {
    __extends(ServicePrincipalsUpdateKeyCredentialsQueryParams, _super);
    function ServicePrincipalsUpdateKeyCredentialsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ServicePrincipalsUpdateKeyCredentialsQueryParams.prototype, "apiVersion", void 0);
    return ServicePrincipalsUpdateKeyCredentialsQueryParams;
}(SpeakeasyBase));
export { ServicePrincipalsUpdateKeyCredentialsQueryParams };
var ServicePrincipalsUpdateKeyCredentialsRequests = /** @class */ (function (_super) {
    __extends(ServicePrincipalsUpdateKeyCredentialsRequests, _super);
    function ServicePrincipalsUpdateKeyCredentialsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.KeyCredentialsUpdateParameters)
    ], ServicePrincipalsUpdateKeyCredentialsRequests.prototype, "keyCredentialsUpdateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.KeyCredentialsUpdateParameters)
    ], ServicePrincipalsUpdateKeyCredentialsRequests.prototype, "keyCredentialsUpdateParameters1", void 0);
    return ServicePrincipalsUpdateKeyCredentialsRequests;
}(SpeakeasyBase));
export { ServicePrincipalsUpdateKeyCredentialsRequests };
var ServicePrincipalsUpdateKeyCredentialsRequest = /** @class */ (function (_super) {
    __extends(ServicePrincipalsUpdateKeyCredentialsRequest, _super);
    function ServicePrincipalsUpdateKeyCredentialsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsUpdateKeyCredentialsPathParams)
    ], ServicePrincipalsUpdateKeyCredentialsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsUpdateKeyCredentialsQueryParams)
    ], ServicePrincipalsUpdateKeyCredentialsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsUpdateKeyCredentialsRequests)
    ], ServicePrincipalsUpdateKeyCredentialsRequest.prototype, "request", void 0);
    return ServicePrincipalsUpdateKeyCredentialsRequest;
}(SpeakeasyBase));
export { ServicePrincipalsUpdateKeyCredentialsRequest };
var ServicePrincipalsUpdateKeyCredentialsResponse = /** @class */ (function (_super) {
    __extends(ServicePrincipalsUpdateKeyCredentialsResponse, _super);
    function ServicePrincipalsUpdateKeyCredentialsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicePrincipalsUpdateKeyCredentialsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], ServicePrincipalsUpdateKeyCredentialsResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicePrincipalsUpdateKeyCredentialsResponse.prototype, "statusCode", void 0);
    return ServicePrincipalsUpdateKeyCredentialsResponse;
}(SpeakeasyBase));
export { ServicePrincipalsUpdateKeyCredentialsResponse };
