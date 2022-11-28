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
var ApplicationsListPasswordCredentialsPathParams = /** @class */ (function (_super) {
    __extends(ApplicationsListPasswordCredentialsPathParams, _super);
    function ApplicationsListPasswordCredentialsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" }),
        __metadata("design:type", String)
    ], ApplicationsListPasswordCredentialsPathParams.prototype, "applicationObjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], ApplicationsListPasswordCredentialsPathParams.prototype, "tenantId", void 0);
    return ApplicationsListPasswordCredentialsPathParams;
}(SpeakeasyBase));
export { ApplicationsListPasswordCredentialsPathParams };
var ApplicationsListPasswordCredentialsQueryParams = /** @class */ (function (_super) {
    __extends(ApplicationsListPasswordCredentialsQueryParams, _super);
    function ApplicationsListPasswordCredentialsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ApplicationsListPasswordCredentialsQueryParams.prototype, "apiVersion", void 0);
    return ApplicationsListPasswordCredentialsQueryParams;
}(SpeakeasyBase));
export { ApplicationsListPasswordCredentialsQueryParams };
var ApplicationsListPasswordCredentialsRequest = /** @class */ (function (_super) {
    __extends(ApplicationsListPasswordCredentialsRequest, _super);
    function ApplicationsListPasswordCredentialsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplicationsListPasswordCredentialsPathParams)
    ], ApplicationsListPasswordCredentialsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplicationsListPasswordCredentialsQueryParams)
    ], ApplicationsListPasswordCredentialsRequest.prototype, "queryParams", void 0);
    return ApplicationsListPasswordCredentialsRequest;
}(SpeakeasyBase));
export { ApplicationsListPasswordCredentialsRequest };
var ApplicationsListPasswordCredentialsResponse = /** @class */ (function (_super) {
    __extends(ApplicationsListPasswordCredentialsResponse, _super);
    function ApplicationsListPasswordCredentialsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApplicationsListPasswordCredentialsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], ApplicationsListPasswordCredentialsResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PasswordCredentialListResult)
    ], ApplicationsListPasswordCredentialsResponse.prototype, "passwordCredentialListResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApplicationsListPasswordCredentialsResponse.prototype, "statusCode", void 0);
    return ApplicationsListPasswordCredentialsResponse;
}(SpeakeasyBase));
export { ApplicationsListPasswordCredentialsResponse };
