package shared

type MemberBiography struct {
	CommitteeMemberships []BiographyItem `json:"committeeMemberships,omitempty"`
	ElectionsContested   []BiographyItem `json:"electionsContested,omitempty"`
	GovernmentPosts      []BiographyItem `json:"governmentPosts,omitempty"`
	HouseMemberships     []BiographyItem `json:"houseMemberships,omitempty"`
	OppositionPosts      []BiographyItem `json:"oppositionPosts,omitempty"`
	OtherPosts           []BiographyItem `json:"otherPosts,omitempty"`
	PartyAffiliations    []BiographyItem `json:"partyAffiliations,omitempty"`
	Representations      []BiographyItem `json:"representations,omitempty"`
}
