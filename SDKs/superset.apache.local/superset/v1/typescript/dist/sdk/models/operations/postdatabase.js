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
var PostDatabaseSecurity = /** @class */ (function (_super) {
    __extends(PostDatabaseSecurity, _super);
    function PostDatabaseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostDatabaseSecurity.prototype, "jwt", void 0);
    return PostDatabaseSecurity;
}(SpeakeasyBase));
export { PostDatabaseSecurity };
var PostDatabase201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabase201ApplicationJson, _super);
    function PostDatabase201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostDatabase201ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.DatabaseRestApiPost)
    ], PostDatabase201ApplicationJson.prototype, "result", void 0);
    return PostDatabase201ApplicationJson;
}(SpeakeasyBase));
export { PostDatabase201ApplicationJson };
var PostDatabase400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabase400ApplicationJson, _super);
    function PostDatabase400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabase400ApplicationJson.prototype, "message", void 0);
    return PostDatabase400ApplicationJson;
}(SpeakeasyBase));
export { PostDatabase400ApplicationJson };
var PostDatabase401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabase401ApplicationJson, _super);
    function PostDatabase401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabase401ApplicationJson.prototype, "message", void 0);
    return PostDatabase401ApplicationJson;
}(SpeakeasyBase));
export { PostDatabase401ApplicationJson };
var PostDatabase404ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabase404ApplicationJson, _super);
    function PostDatabase404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabase404ApplicationJson.prototype, "message", void 0);
    return PostDatabase404ApplicationJson;
}(SpeakeasyBase));
export { PostDatabase404ApplicationJson };
var PostDatabase500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDatabase500ApplicationJson, _super);
    function PostDatabase500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDatabase500ApplicationJson.prototype, "message", void 0);
    return PostDatabase500ApplicationJson;
}(SpeakeasyBase));
export { PostDatabase500ApplicationJson };
var PostDatabaseRequest = /** @class */ (function (_super) {
    __extends(PostDatabaseRequest, _super);
    function PostDatabaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DatabaseRestApiPost)
    ], PostDatabaseRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabaseSecurity)
    ], PostDatabaseRequest.prototype, "security", void 0);
    return PostDatabaseRequest;
}(SpeakeasyBase));
export { PostDatabaseRequest };
var PostDatabaseResponse = /** @class */ (function (_super) {
    __extends(PostDatabaseResponse, _super);
    function PostDatabaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDatabaseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabase201ApplicationJson)
    ], PostDatabaseResponse.prototype, "postDatabase201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabase400ApplicationJson)
    ], PostDatabaseResponse.prototype, "postDatabase400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabase401ApplicationJson)
    ], PostDatabaseResponse.prototype, "postDatabase401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabase404ApplicationJson)
    ], PostDatabaseResponse.prototype, "postDatabase404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDatabase500ApplicationJson)
    ], PostDatabaseResponse.prototype, "postDatabase500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDatabaseResponse.prototype, "statusCode", void 0);
    return PostDatabaseResponse;
}(SpeakeasyBase));
export { PostDatabaseResponse };
