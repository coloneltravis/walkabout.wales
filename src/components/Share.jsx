

import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from 'react-share';

import './Share.scss';

library.add(fab);


const Share = ({ socialConfig, tags }) => (
	<div className="post-social">
		<FacebookShareButton url={socialConfig.config.url} className="button is-outlined is-rounded facebook" >
			<span className="icon">
				<FontAwesomeIcon icon={ ['fab', 'facebook-f' ] } />
			</span>
			<span className="text">Facebook</span>
		</FacebookShareButton>
		<TwitterShareButton url={socialConfig.config.url} className="button is-outlined is-rounded twitter" title={socialConfig.config.title} via={socialConfig.twitterHandle.split('@').join('')} hashtags={tags} >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'twitter']} />
			</span>
			<span className="text">Twitter</span>
		</TwitterShareButton>
		<WhatsappShareButton url={socialConfig.config.url} className="button is-outlined is-rounded whatsapp" title={socialConfig.config.title} >
			<span className="icon">
				<FontAwesomeIcon icon={['fab', 'whatsapp']} />
			</span>
			<span className="text">WhatsApp</span>
		</WhatsappShareButton>
	</div>
);

Share.propTypes = {
	socialConfig: PropTypes.shape({
		twitterHandle: PropTypes.string.isRequired,
		config: PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
		}),
	}).isRequired,
	tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
	tags: [],
};

export default Share;

