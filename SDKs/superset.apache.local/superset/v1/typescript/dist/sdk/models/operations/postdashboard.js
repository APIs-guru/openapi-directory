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
var PostDashboardSecurity = /** @class */ (function (_super) {
    __extends(PostDashboardSecurity, _super);
    function PostDashboardSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], PostDashboardSecurity.prototype, "jwt", void 0);
    return PostDashboardSecurity;
}(SpeakeasyBase));
export { PostDashboardSecurity };
var PostDashboard201ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDashboard201ApplicationJson, _super);
    function PostDashboard201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostDashboard201ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", shared.DashboardRestApiPost)
    ], PostDashboard201ApplicationJson.prototype, "result", void 0);
    return PostDashboard201ApplicationJson;
}(SpeakeasyBase));
export { PostDashboard201ApplicationJson };
var PostDashboard400ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDashboard400ApplicationJson, _super);
    function PostDashboard400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDashboard400ApplicationJson.prototype, "message", void 0);
    return PostDashboard400ApplicationJson;
}(SpeakeasyBase));
export { PostDashboard400ApplicationJson };
var PostDashboard401ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDashboard401ApplicationJson, _super);
    function PostDashboard401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDashboard401ApplicationJson.prototype, "message", void 0);
    return PostDashboard401ApplicationJson;
}(SpeakeasyBase));
export { PostDashboard401ApplicationJson };
var PostDashboard404ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDashboard404ApplicationJson, _super);
    function PostDashboard404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDashboard404ApplicationJson.prototype, "message", void 0);
    return PostDashboard404ApplicationJson;
}(SpeakeasyBase));
export { PostDashboard404ApplicationJson };
var PostDashboard500ApplicationJson = /** @class */ (function (_super) {
    __extends(PostDashboard500ApplicationJson, _super);
    function PostDashboard500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostDashboard500ApplicationJson.prototype, "message", void 0);
    return PostDashboard500ApplicationJson;
}(SpeakeasyBase));
export { PostDashboard500ApplicationJson };
var PostDashboardRequest = /** @class */ (function (_super) {
    __extends(PostDashboardRequest, _super);
    function PostDashboardRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DashboardRestApiPost)
    ], PostDashboardRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDashboardSecurity)
    ], PostDashboardRequest.prototype, "security", void 0);
    return PostDashboardRequest;
}(SpeakeasyBase));
export { PostDashboardRequest };
var PostDashboardResponse = /** @class */ (function (_super) {
    __extends(PostDashboardResponse, _super);
    function PostDashboardResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostDashboardResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDashboard201ApplicationJson)
    ], PostDashboardResponse.prototype, "postDashboard201ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDashboard400ApplicationJson)
    ], PostDashboardResponse.prototype, "postDashboard400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDashboard401ApplicationJson)
    ], PostDashboardResponse.prototype, "postDashboard401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDashboard404ApplicationJson)
    ], PostDashboardResponse.prototype, "postDashboard404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostDashboard500ApplicationJson)
    ], PostDashboardResponse.prototype, "postDashboard500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostDashboardResponse.prototype, "statusCode", void 0);
    return PostDashboardResponse;
}(SpeakeasyBase));
export { PostDashboardResponse };
