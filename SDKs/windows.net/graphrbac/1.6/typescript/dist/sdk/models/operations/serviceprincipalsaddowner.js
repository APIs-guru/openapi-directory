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
var ServicePrincipalsAddOwnerPathParams = /** @class */ (function (_super) {
    __extends(ServicePrincipalsAddOwnerPathParams, _super);
    function ServicePrincipalsAddOwnerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" }),
        __metadata("design:type", String)
    ], ServicePrincipalsAddOwnerPathParams.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], ServicePrincipalsAddOwnerPathParams.prototype, "tenantId", void 0);
    return ServicePrincipalsAddOwnerPathParams;
}(SpeakeasyBase));
export { ServicePrincipalsAddOwnerPathParams };
var ServicePrincipalsAddOwnerQueryParams = /** @class */ (function (_super) {
    __extends(ServicePrincipalsAddOwnerQueryParams, _super);
    function ServicePrincipalsAddOwnerQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ServicePrincipalsAddOwnerQueryParams.prototype, "apiVersion", void 0);
    return ServicePrincipalsAddOwnerQueryParams;
}(SpeakeasyBase));
export { ServicePrincipalsAddOwnerQueryParams };
var ServicePrincipalsAddOwnerRequests = /** @class */ (function (_super) {
    __extends(ServicePrincipalsAddOwnerRequests, _super);
    function ServicePrincipalsAddOwnerRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], ServicePrincipalsAddOwnerRequests.prototype, "addOwnerParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", Map)
    ], ServicePrincipalsAddOwnerRequests.prototype, "addOwnerParameters1", void 0);
    return ServicePrincipalsAddOwnerRequests;
}(SpeakeasyBase));
export { ServicePrincipalsAddOwnerRequests };
var ServicePrincipalsAddOwnerRequest = /** @class */ (function (_super) {
    __extends(ServicePrincipalsAddOwnerRequest, _super);
    function ServicePrincipalsAddOwnerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsAddOwnerPathParams)
    ], ServicePrincipalsAddOwnerRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsAddOwnerQueryParams)
    ], ServicePrincipalsAddOwnerRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsAddOwnerRequests)
    ], ServicePrincipalsAddOwnerRequest.prototype, "request", void 0);
    return ServicePrincipalsAddOwnerRequest;
}(SpeakeasyBase));
export { ServicePrincipalsAddOwnerRequest };
var ServicePrincipalsAddOwnerResponse = /** @class */ (function (_super) {
    __extends(ServicePrincipalsAddOwnerResponse, _super);
    function ServicePrincipalsAddOwnerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicePrincipalsAddOwnerResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], ServicePrincipalsAddOwnerResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicePrincipalsAddOwnerResponse.prototype, "statusCode", void 0);
    return ServicePrincipalsAddOwnerResponse;
}(SpeakeasyBase));
export { ServicePrincipalsAddOwnerResponse };
