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
import { ExperimentalFeaturesBody } from "./experimentalfeaturesbody";
import { IdentityBody } from "./identitybody";
import { PersonalizationInfoBody } from "./personalizationinfobody";
import { SecretDataBody } from "./secretdatabody";
import { SeedInfoBody } from "./seedinfobody";
var CreateCloudEnvironmentBody = /** @class */ (function (_super) {
    __extends(CreateCloudEnvironmentBody, _super);
    function CreateCloudEnvironmentBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=autoShutdownDelayMinutes" }),
        __metadata("design:type", Number)
    ], CreateCloudEnvironmentBody.prototype, "autoShutdownDelayMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=connection" }),
        __metadata("design:type", ConnectionInfoBody)
    ], CreateCloudEnvironmentBody.prototype, "connection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containerImage" }),
        __metadata("design:type", String)
    ], CreateCloudEnvironmentBody.prototype, "containerImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createAsPrebuild" }),
        __metadata("design:type", Boolean)
    ], CreateCloudEnvironmentBody.prototype, "createAsPrebuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devContainerJson" }),
        __metadata("design:type", String)
    ], CreateCloudEnvironmentBody.prototype, "devContainerJson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=experimentalFeatures" }),
        __metadata("design:type", ExperimentalFeaturesBody)
    ], CreateCloudEnvironmentBody.prototype, "experimentalFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=features" }),
        __metadata("design:type", Map)
    ], CreateCloudEnvironmentBody.prototype, "features", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendlyName" }),
        __metadata("design:type", String)
    ], CreateCloudEnvironmentBody.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=githubEnvironmentEndpoint" }),
        __metadata("design:type", String)
    ], CreateCloudEnvironmentBody.prototype, "githubEnvironmentEndpoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hasDevcontainerJson" }),
        __metadata("design:type", Boolean)
    ], CreateCloudEnvironmentBody.prototype, "hasDevcontainerJson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identity" }),
        __metadata("design:type", IdentityBody)
    ], CreateCloudEnvironmentBody.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CreateCloudEnvironmentBody.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], CreateCloudEnvironmentBody.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=personalization" }),
        __metadata("design:type", PersonalizationInfoBody)
    ], CreateCloudEnvironmentBody.prototype, "personalization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=planId" }),
        __metadata("design:type", String)
    ], CreateCloudEnvironmentBody.prototype, "planId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], CreateCloudEnvironmentBody.prototype, "platform", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secrets", elemType: SecretDataBody }),
        __metadata("design:type", Array)
    ], CreateCloudEnvironmentBody.prototype, "secrets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seed" }),
        __metadata("design:type", SeedInfoBody)
    ], CreateCloudEnvironmentBody.prototype, "seed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skuName" }),
        __metadata("design:type", String)
    ], CreateCloudEnvironmentBody.prototype, "skuName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateCloudEnvironmentBody.prototype, "type", void 0);
    return CreateCloudEnvironmentBody;
}(SpeakeasyBase));
export { CreateCloudEnvironmentBody };
