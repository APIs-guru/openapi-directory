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
var GetUsersIdAttachmentsPathParams = /** @class */ (function (_super) {
    __extends(GetUsersIdAttachmentsPathParams, _super);
    function GetUsersIdAttachmentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetUsersIdAttachmentsPathParams.prototype, "id", void 0);
    return GetUsersIdAttachmentsPathParams;
}(SpeakeasyBase));
export { GetUsersIdAttachmentsPathParams };
var GetUsersIdAttachmentsQueryParams = /** @class */ (function (_super) {
    __extends(GetUsersIdAttachmentsQueryParams, _super);
    function GetUsersIdAttachmentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unassigned" }),
        __metadata("design:type", Number)
    ], GetUsersIdAttachmentsQueryParams.prototype, "unassigned", void 0);
    return GetUsersIdAttachmentsQueryParams;
}(SpeakeasyBase));
export { GetUsersIdAttachmentsQueryParams };
var GetUsersIdAttachmentsRequest = /** @class */ (function (_super) {
    __extends(GetUsersIdAttachmentsRequest, _super);
    function GetUsersIdAttachmentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdAttachmentsPathParams)
    ], GetUsersIdAttachmentsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUsersIdAttachmentsQueryParams)
    ], GetUsersIdAttachmentsRequest.prototype, "queryParams", void 0);
    return GetUsersIdAttachmentsRequest;
}(SpeakeasyBase));
export { GetUsersIdAttachmentsRequest };
var GetUsersIdAttachmentsResponse = /** @class */ (function (_super) {
    __extends(GetUsersIdAttachmentsResponse, _super);
    function GetUsersIdAttachmentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Attachment }),
        __metadata("design:type", Array)
    ], GetUsersIdAttachmentsResponse.prototype, "attachments", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUsersIdAttachmentsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GetUsersIdAttachmentsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUsersIdAttachmentsResponse.prototype, "statusCode", void 0);
    return GetUsersIdAttachmentsResponse;
}(SpeakeasyBase));
export { GetUsersIdAttachmentsResponse };
