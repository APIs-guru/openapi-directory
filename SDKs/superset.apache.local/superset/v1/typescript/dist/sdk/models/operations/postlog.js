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
var PostLogSecurity = /** @class */ (function (_super) {
    __extends(PostLogSecurity, _super);
    function PostLogSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostLogSecurity.prototype, "jwt", void 0);
    return PostLogSecurity;
}(SpeakeasyBase));
export { PostLogSecurity };
var PostLog201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostLog201ApplicationJson, _super);
    function PostLog201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], PostLog201ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.LogRestApiPost)
    ], PostLog201ApplicationJson.prototype, "result", void 0);
    return PostLog201ApplicationJson;
}(SpeakeasyBase));
export { PostLog201ApplicationJson };
var PostLog400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostLog400ApplicationJson, _super);
    function PostLog400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLog400ApplicationJson.prototype, "message", void 0);
    return PostLog400ApplicationJson;
}(SpeakeasyBase));
export { PostLog400ApplicationJson };
var PostLog401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostLog401ApplicationJson, _super);
    function PostLog401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLog401ApplicationJson.prototype, "message", void 0);
    return PostLog401ApplicationJson;
}(SpeakeasyBase));
export { PostLog401ApplicationJson };
var PostLog422ApplicationJson = /** @class */ (function (_super) {
    __extends(PostLog422ApplicationJson, _super);
    function PostLog422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLog422ApplicationJson.prototype, "message", void 0);
    return PostLog422ApplicationJson;
}(SpeakeasyBase));
export { PostLog422ApplicationJson };
var PostLog500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostLog500ApplicationJson, _super);
    function PostLog500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostLog500ApplicationJson.prototype, "message", void 0);
    return PostLog500ApplicationJson;
}(SpeakeasyBase));
export { PostLog500ApplicationJson };
var PostLogRequest = /** @class */ (function (_super) {
    __extends(PostLogRequest, _super);
    function PostLogRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LogRestApiPost)
    ], PostLogRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLogSecurity)
    ], PostLogRequest.prototype, "security", void 0);
    return PostLogRequest;
}(SpeakeasyBase));
export { PostLogRequest };
var PostLogResponse = /** @class */ (function (_super) {
    __extends(PostLogResponse, _super);
    function PostLogResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLogResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLog201ApplicationJson)
    ], PostLogResponse.prototype, "postLog201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLog400ApplicationJson)
    ], PostLogResponse.prototype, "postLog400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLog401ApplicationJson)
    ], PostLogResponse.prototype, "postLog401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLog422ApplicationJson)
    ], PostLogResponse.prototype, "postLog422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLog500ApplicationJson)
    ], PostLogResponse.prototype, "postLog500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLogResponse.prototype, "statusCode", void 0);
    return PostLogResponse;
}(SpeakeasyBase));
export { PostLogResponse };
