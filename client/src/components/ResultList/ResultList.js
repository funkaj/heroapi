import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';
import './ResultList.css';
// import { Link } from '@material-ui/core';

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	InfoIcon: {
		color: 'white',
	},
});
/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function ResultList(props) {
	console.log(props);
	const { classes } = props;

	return (
		<div className={classes.root}>
			<GridList cellHeight={500} className={classes.gridList} cols={3}>
				{props.results.map(result => (
					<GridListTile key={result.image.small_url} cols={result.cols || 1}>
						<img src={result.image.small_url} alt={result.id} />
						<GridListTileBar
							title={result.name}
							subtitle={<span>Publisher: {result.publisher.name}</span>}
							actionIcon={
								<IconButton
									className={classes.icon}
									id={result.id}
									onClick={() => props.goToBio(result)}>
									<InfoIcon style={{ color: 'white' }} />
								</IconButton>
							}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}

ResultList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultList);
