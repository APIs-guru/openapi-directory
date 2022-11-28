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
var ServicePrincipalsDeletePathParams = /** @class */ (function (_super) {
    __extends(ServicePrincipalsDeletePathParams, _super);
    function ServicePrincipalsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" }),
        __metadata("design:type", String)
    ], ServicePrincipalsDeletePathParams.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], ServicePrincipalsDeletePathParams.prototype, "tenantId", void 0);
    return ServicePrincipalsDeletePathParams;
}(SpeakeasyBase));
export { ServicePrincipalsDeletePathParams };
var ServicePrincipalsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ServicePrincipalsDeleteQueryParams, _super);
    function ServicePrincipalsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ServicePrincipalsDeleteQueryParams.prototype, "apiVersion", void 0);
    return ServicePrincipalsDeleteQueryParams;
}(SpeakeasyBase));
export { ServicePrincipalsDeleteQueryParams };
var ServicePrincipalsDeleteRequest = /** @class */ (function (_super) {
    __extends(ServicePrincipalsDeleteRequest, _super);
    function ServicePrincipalsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsDeletePathParams)
    ], ServicePrincipalsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicePrincipalsDeleteQueryParams)
    ], ServicePrincipalsDeleteRequest.prototype, "queryParams", void 0);
    return ServicePrincipalsDeleteRequest;
}(SpeakeasyBase));
export { ServicePrincipalsDeleteRequest };
var ServicePrincipalsDeleteResponse = /** @class */ (function (_super) {
    __extends(ServicePrincipalsDeleteResponse, _super);
    function ServicePrincipalsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicePrincipalsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], ServicePrincipalsDeleteResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicePrincipalsDeleteResponse.prototype, "statusCode", void 0);
    return ServicePrincipalsDeleteResponse;
}(SpeakeasyBase));
export { ServicePrincipalsDeleteResponse };
