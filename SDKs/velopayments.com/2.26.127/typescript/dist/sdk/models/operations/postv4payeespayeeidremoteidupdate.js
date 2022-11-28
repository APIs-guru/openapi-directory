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
var PostV4PayeesPayeeIdRemoteIdUpdatePathParams = /** @class */ (function (_super) {
    __extends(PostV4PayeesPayeeIdRemoteIdUpdatePathParams, _super);
    function PostV4PayeesPayeeIdRemoteIdUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payeeId" }),
        __metadata("design:type", String)
    ], PostV4PayeesPayeeIdRemoteIdUpdatePathParams.prototype, "payeeId", void 0);
    return PostV4PayeesPayeeIdRemoteIdUpdatePathParams;
}(SpeakeasyBase));
export { PostV4PayeesPayeeIdRemoteIdUpdatePathParams };
var PostV4PayeesPayeeIdRemoteIdUpdateRequest = /** @class */ (function (_super) {
    __extends(PostV4PayeesPayeeIdRemoteIdUpdateRequest, _super);
    function PostV4PayeesPayeeIdRemoteIdUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV4PayeesPayeeIdRemoteIdUpdatePathParams)
    ], PostV4PayeesPayeeIdRemoteIdUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateRemoteIdRequest2)
    ], PostV4PayeesPayeeIdRemoteIdUpdateRequest.prototype, "request", void 0);
    return PostV4PayeesPayeeIdRemoteIdUpdateRequest;
}(SpeakeasyBase));
export { PostV4PayeesPayeeIdRemoteIdUpdateRequest };
var PostV4PayeesPayeeIdRemoteIdUpdateResponse = /** @class */ (function (_super) {
    __extends(PostV4PayeesPayeeIdRemoteIdUpdateResponse, _super);
    function PostV4PayeesPayeeIdRemoteIdUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV4PayeesPayeeIdRemoteIdUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV4PayeesPayeeIdRemoteIdUpdateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostV4PayeesPayeeIdRemoteIdUpdateResponse.prototype, "inlineResponse400", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostV4PayeesPayeeIdRemoteIdUpdateResponse.prototype, "inlineResponse401", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostV4PayeesPayeeIdRemoteIdUpdateResponse.prototype, "inlineResponse403", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostV4PayeesPayeeIdRemoteIdUpdateResponse.prototype, "inlineResponse404", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], PostV4PayeesPayeeIdRemoteIdUpdateResponse.prototype, "inlineResponse409", void 0);
    return PostV4PayeesPayeeIdRemoteIdUpdateResponse;
}(SpeakeasyBase));
export { PostV4PayeesPayeeIdRemoteIdUpdateResponse };
