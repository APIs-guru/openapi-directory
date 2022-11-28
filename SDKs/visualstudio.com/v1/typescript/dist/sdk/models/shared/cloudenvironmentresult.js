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
import { ConnectionInfoBody } from "./connectioninfobody";
import { ContainerInfoBody } from "./containerinfobody";
import { GitStatus } from "./gitstatus";
import { SeedInfoBody } from "./seedinfobody";
import { SubscriptionData } from "./subscriptiondata";
var CloudEnvironmentResult = /** @class */ (function (_super) {
    __extends(CloudEnvironmentResult, _super);
    function CloudEnvironmentResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessToken" }),
        __metadata("design:type", String)
    ], CloudEnvironmentResult.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Date)
    ], CloudEnvironmentResult.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoShutdownDelayMinutes" }),
        __metadata("design:type", Number)
    ], CloudEnvironmentResult.prototype, "autoShutdownDelayMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection" }),
        __metadata("design:type", ConnectionInfoBody)
    ], CloudEnvironmentResult.prototype, "connection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=container" }),
        __metadata("design:type", ContainerInfoBody)
    ], CloudEnvironmentResult.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerImage" }),
        __metadata("design:type", String)
    ], CloudEnvironmentResult.prototype, "containerImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], CloudEnvironmentResult.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=exportedBlobUrl" }),
        __metadata("design:type", String)
    ], CloudEnvironmentResult.prototype, "exportedBlobUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=features" }),
        __metadata("design:type", Map)
    ], CloudEnvironmentResult.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendlyName" }),
        __metadata("design:type", String)
    ], CloudEnvironmentResult.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gitStatus" }),
        __metadata("design:type", GitStatus)
    ], CloudEnvironmentResult.prototype, "gitStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CloudEnvironmentResult.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastStateUpdateReason" }),
        __metadata("design:type", String)
    ], CloudEnvironmentResult.prototype, "lastStateUpdateReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUsed" }),
        __metadata("design:type", Date)
    ], CloudEnvironmentResult.prototype, "lastUsed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], CloudEnvironmentResult.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ownerId" }),
        __metadata("design:type", String)
    ], CloudEnvironmentResult.prototype, "ownerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=planId" }),
        __metadata("design:type", String)
    ], CloudEnvironmentResult.prototype, "planId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], CloudEnvironmentResult.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portForwardingConnection" }),
        __metadata("design:type", ConnectionInfoBody)
    ], CloudEnvironmentResult.prototype, "portForwardingConnection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recentFolders" }),
        __metadata("design:type", Array)
    ], CloudEnvironmentResult.prototype, "recentFolders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seed" }),
        __metadata("design:type", SeedInfoBody)
    ], CloudEnvironmentResult.prototype, "seed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skuDisplayName" }),
        __metadata("design:type", String)
    ], CloudEnvironmentResult.prototype, "skuDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skuName" }),
        __metadata("design:type", String)
    ], CloudEnvironmentResult.prototype, "skuName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], CloudEnvironmentResult.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriptionData" }),
        __metadata("design:type", SubscriptionData)
    ], CloudEnvironmentResult.prototype, "subscriptionData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CloudEnvironmentResult.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], CloudEnvironmentResult.prototype, "updated", void 0);
    return CloudEnvironmentResult;
}(SpeakeasyBase));
export { CloudEnvironmentResult };
