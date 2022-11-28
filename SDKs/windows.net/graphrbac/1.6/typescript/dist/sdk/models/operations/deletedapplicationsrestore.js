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
var DeletedApplicationsRestorePathParams = /** @class */ (function (_super) {
    __extends(DeletedApplicationsRestorePathParams, _super);
    function DeletedApplicationsRestorePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectId" }),
        __metadata("design:type", String)
    ], DeletedApplicationsRestorePathParams.prototype, "objectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tenantID" }),
        __metadata("design:type", String)
    ], DeletedApplicationsRestorePathParams.prototype, "tenantId", void 0);
    return DeletedApplicationsRestorePathParams;
}(SpeakeasyBase));
export { DeletedApplicationsRestorePathParams };
var DeletedApplicationsRestoreQueryParams = /** @class */ (function (_super) {
    __extends(DeletedApplicationsRestoreQueryParams, _super);
    function DeletedApplicationsRestoreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api-version" }),
        __metadata("design:type", String)
    ], DeletedApplicationsRestoreQueryParams.prototype, "apiVersion", void 0);
    return DeletedApplicationsRestoreQueryParams;
}(SpeakeasyBase));
export { DeletedApplicationsRestoreQueryParams };
var DeletedApplicationsRestoreRequest = /** @class */ (function (_super) {
    __extends(DeletedApplicationsRestoreRequest, _super);
    function DeletedApplicationsRestoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletedApplicationsRestorePathParams)
    ], DeletedApplicationsRestoreRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeletedApplicationsRestoreQueryParams)
    ], DeletedApplicationsRestoreRequest.prototype, "queryParams", void 0);
    return DeletedApplicationsRestoreRequest;
}(SpeakeasyBase));
export { DeletedApplicationsRestoreRequest };
var DeletedApplicationsRestoreResponse = /** @class */ (function (_super) {
    __extends(DeletedApplicationsRestoreResponse, _super);
    function DeletedApplicationsRestoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeletedApplicationsRestoreResponse.prototype, "application", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeletedApplicationsRestoreResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GraphError)
    ], DeletedApplicationsRestoreResponse.prototype, "graphError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeletedApplicationsRestoreResponse.prototype, "statusCode", void 0);
    return DeletedApplicationsRestoreResponse;
}(SpeakeasyBase));
export { DeletedApplicationsRestoreResponse };
