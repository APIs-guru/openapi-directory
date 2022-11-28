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
var ApplicationsUpdatePasswordCredentialsPathParams = /** @class */ (function (_super) {
    __extends(ApplicationsUpdatePasswordCredentialsPathParams, _super);
    function ApplicationsUpdatePasswordCredentialsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=applicationObjectId" }),
        __metadata("design:type", String)
    ], ApplicationsUpdatePasswordCredentialsPathParams.prototype, "applicationObjectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], ApplicationsUpdatePasswordCredentialsPathParams.prototype, "tenantId", void 0);
    return ApplicationsUpdatePasswordCredentialsPathParams;
}(SpeakeasyBase));
export { ApplicationsUpdatePasswordCredentialsPathParams };
var ApplicationsUpdatePasswordCredentialsQueryParams = /** @class */ (function (_super) {
    __extends(ApplicationsUpdatePasswordCredentialsQueryParams, _super);
    function ApplicationsUpdatePasswordCredentialsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], ApplicationsUpdatePasswordCredentialsQueryParams.prototype, "apiVersion", void 0);
    return ApplicationsUpdatePasswordCredentialsQueryParams;
}(SpeakeasyBase));
export { ApplicationsUpdatePasswordCredentialsQueryParams };
var ApplicationsUpdatePasswordCredentialsRequests = /** @class */ (function (_super) {
    __extends(ApplicationsUpdatePasswordCredentialsRequests, _super);
    function ApplicationsUpdatePasswordCredentialsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PasswordCredentialsUpdateParameters)
    ], ApplicationsUpdatePasswordCredentialsRequests.prototype, "passwordCredentialsUpdateParameters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.PasswordCredentialsUpdateParameters)
    ], ApplicationsUpdatePasswordCredentialsRequests.prototype, "passwordCredentialsUpdateParameters1", void 0);
    return ApplicationsUpdatePasswordCredentialsRequests;
}(SpeakeasyBase));
export { ApplicationsUpdatePasswordCredentialsRequests };
var ApplicationsUpdatePasswordCredentialsRequest = /** @class */ (function (_super) {
    __extends(ApplicationsUpdatePasswordCredentialsRequest, _super);
    function ApplicationsUpdatePasswordCredentialsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplicationsUpdatePasswordCredentialsPathParams)
    ], ApplicationsUpdatePasswordCredentialsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplicationsUpdatePasswordCredentialsQueryParams)
    ], ApplicationsUpdatePasswordCredentialsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ApplicationsUpdatePasswordCredentialsRequests)
    ], ApplicationsUpdatePasswordCredentialsRequest.prototype, "request", void 0);
    return ApplicationsUpdatePasswordCredentialsRequest;
}(SpeakeasyBase));
export { ApplicationsUpdatePasswordCredentialsRequest };
var ApplicationsUpdatePasswordCredentialsResponse = /** @class */ (function (_super) {
    __extends(ApplicationsUpdatePasswordCredentialsResponse, _super);
    function ApplicationsUpdatePasswordCredentialsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ApplicationsUpdatePasswordCredentialsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], ApplicationsUpdatePasswordCredentialsResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ApplicationsUpdatePasswordCredentialsResponse.prototype, "statusCode", void 0);
    return ApplicationsUpdatePasswordCredentialsResponse;
}(SpeakeasyBase));
export { ApplicationsUpdatePasswordCredentialsResponse };
